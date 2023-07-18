remote_state {
  backend = "azurerm"
  config = {
    resouce_group_name = "terraformstate"
    storage_account_name = "tfstateazure"
    container_name = "terraformstate"
    key = ""
  } 
}

input = {
  location = "westus"
  resource_group = 
}