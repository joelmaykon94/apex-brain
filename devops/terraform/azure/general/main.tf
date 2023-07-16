provider "azurerm" {
  features {

  }
}

variable "location" {
  type        = string
  description = "Locale to resources of Azure."
  default     = "westus"
}

variable "tags" {
  type        = map(any)
  description = "Tags of resources and services azure"
  default = {
    environment = "dev"
    manager     = "Joel Maykon"
  }
}

variable "name-rg" {
  type        = string
  description = "Name of resource"
  default     = "apex"
}

variable "vnet_address" {
  type    = list(any)
  default = ["10.0.0.0/16", "192.168.0.0/16"]
}

resource "azurerm_resource_group" "apex_group" {
  name     = var.name-rg
  location = var.location
  tags     = merge(var.tags, { version = "v2.1" })
}

resource "azurerm_virtual_network" "vnet" {
  name                = "vnet-terraform"
  resource_group_name = azurerm_resource_group.apex_group.name
  location            = var.location
  address_space       = var.vnet_address
}

resource "azurerm_resource_group" "vnet_resource_group" {
  location = "westus"
  name     = "vnet_resource_group"
}

resource "azurerm_network_security_group" "net_sec_group" {
  name                = "apex"
  location            = "westus"
  resource_group_name = "vnet_resource_group"
}

variable "rules_input" {
  type        = map(any)
  description = "list ports open to web"
  default = {
    101 = 80
    102 = 443
    104 = 22
  }
}

resource "azurerm_network_security_rule" "rules_input_on" {
  network_security_group_name = "apex_net_sec_group"
  for_each                    = var.rules_input
  resource_group_name         = "vnet_resource_group"
  name                        = "port_input_${each.value}"
  priority                    = each.key
  destination_port_range      = each.value
  direction                   = "Inbound"
  access                      = "Allow"
  source_port_range           = "*"
  source_address_prefix       = "*"
  protocol                    = "Tcp"
  destination_address_prefix  = "*"

}