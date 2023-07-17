output "sample_app_deployment_token" {
  value     = azurerm_app_service.app_service.api_key
  sensitive = true
}