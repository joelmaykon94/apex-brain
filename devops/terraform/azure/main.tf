provider "azurerm" {
  features {
    
  }
}

resource "azurerm_resource_group" "apex_group" {
  name     = "apex"
  location = "West Europe"
}