terraform {
  required_providers {
    archive = {
      source = "hashicorp/archive"
      version = "2.4.0"
    }
    random = {
      source = "hashicorp/random"
      version = "3.5.1"
    }
  }
}

resource "random_string" "random" {
  length = 14
}

data "archive_file" "file_zip" {
  type = "zip"
  source_file = "data_backup/data.txt"
  output_path = "${random_string.random.result}.zip"
}

output "file_zip" {
  value = data.archive_file.file_zip.output_size
}

output "random_string" {
  value = random_string.random.result
}