terraform {
  required_providers {
    archive = {
      source = "hashicorp/archive"
      version = "2.4.0"
    }
  }
}

data "archive_file" "file_zip" {
  type = "zip"
  source_file = "data_backup/data.txt"
  output_path = "backup.zip"
}

output "file_zip" {
  value = data.archive_file.file_zip.output_size
}