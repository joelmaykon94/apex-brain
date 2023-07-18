terraform {
  required_providers {
    random = {
      source = "hashicorp/random"
    }
    azurerm = {
      source = "hashicorp/azurerm"
    }
  }
}

provider "random" {}
provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "resgroupstorage" {
  name     = "apex_storage"
  location = "westus"
}

resource "random_string" "random" {
  length  = 5
  special = false
  upper   = false
  numeric  = true
}

resource "azurerm_storage_account" "storage_apex_tf" {
  name                     = "apex${random_string.random.result}"
  resource_group_name      = azurerm_resource_group.resgroupstorage.name
  location                 = "westus"
  account_tier             = "Standard"
  access_tier              = "Hot"
  account_replication_type = "LRS"
}

resource "azurerm_storage_container" "container_apex" {
  name                 = "apexterraform"
  storage_account_name = azurerm_storage_account.storage_apex_tf.name
  depends_on           = [azurerm_storage_account.storage_apex_tf]
}

output "blobstorage_apex_name" {
  value = azurerm_storage_account.storage_apex_tf.name
}

output "blobstorageapex-primary-access-key" {
  value = azurerm_storage_account.storage_apex_tf.primary_access_key
  #sensitive = true
}

output "blobstorage-apex-secondary-access-key" {
  value = azurerm_storage_account.storage_apex_tf.secondary_access_key
  #sensitive = true
}