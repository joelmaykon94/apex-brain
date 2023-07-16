provider "azurerm" {
  features {

  }
}

variable "location" {
  type        = string
  description = "Locale to resources of Azure."
  default     = brazilsouth
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