resource "null_resource" "bash" {
  provisioner "local-exec" {
    command = "echo testing provisioner terraform!"
  }
}