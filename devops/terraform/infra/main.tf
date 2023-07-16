resource "azurerm_resource_group" "apex_res_group" {
  name     = "apex-${lower(var.environment)}"
  location = var.location
}

resource "azurerm_service_plan" "plan" {
  name                = "apex-${lower(var.environment)}"
  location            = var.location
  resource_group_name = azurerm_resource_group.apex_res_group.name
  os_type             = "Linux"
  sku_name            = "F1"
}

resource "azurerm_app_service" "app_service" {
  name                = "apex-${lower(var.environment)}"
  location            = azurerm_resource_group.apex_res_group.location
  resource_group_name = azurerm_resource_group.apex_res_group.name
  app_service_plan_id = azurerm_service_plan.plan.id

  site_config {
    use_32_bit_worker_process = true
  }
}