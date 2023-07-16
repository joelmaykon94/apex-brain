terraform {
  backend "azurerm" {
    resource_group_name  = "terraformstate"
    storage_account_name = "tfstate_apex"
    container_name       = "terraformstate"
    key                  = "<token storage blob>"
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "res_group_state" {
  name = "res_group_terraform"
  location = "westus"
}