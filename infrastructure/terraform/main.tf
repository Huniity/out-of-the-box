terraform {
  required_version = ">= 1.0"
  required_providers {
    null = {
      source  = "hashicorp/null"
      version = "~> 3.0"
    }
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

variable "server_ip" {
  description = "IP address of the target server"
  type        = string
}

variable "ssh_port" {
  description = "SSH port for the target server"
  type        = number
  default     = 22
}

variable "ssh_user" {
  description = "SSH user for the target server"
  type        = string
}

variable "ssh_key_path" {
  description = "Path to SSH private key"
  type        = string
}

# Upload deployment files to the server
resource "null_resource" "upload_files" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "remote-exec" {
    inline = [
      "rm -rf /home/${var.ssh_user}/outofthebox-deployment",
      "mkdir -p /home/${var.ssh_user}/outofthebox-deployment"
    ]

    connection {
      type        = "ssh"
      user        = var.ssh_user
      private_key = file(pathexpand(var.ssh_key_path))
      host        = var.server_ip
      port        = var.ssh_port
    }
  }

  provisioner "local-exec" {
    command = "rsync -avz --delete --exclude='.git' --exclude='__pycache__' --exclude='*.pyc' --exclude='node_modules' --exclude='.env' --exclude='logs' --exclude='*.log' --exclude='srcs/frontend/dist' --exclude='srcs/backend/dist' --exclude='srcs/frontend/node_modules' -e 'ssh -i ${pathexpand(var.ssh_key_path)} -p ${var.ssh_port} -o StrictHostKeyChecking=no' ${path.root}/../../ ${var.ssh_user}@${var.server_ip}:/home/${var.ssh_user}/outofthebox-deployment/"
  }
}

# Deploy application on the remote server
resource "null_resource" "deploy_application" {
  depends_on = [null_resource.upload_files]

  triggers = {
    always_run = timestamp()
  }

  provisioner "remote-exec" {
    inline = [
      "cd /home/${var.ssh_user}/outofthebox-deployment",
      "chmod +x infrastructure/scripts/prod-deploy.sh",
      "bash infrastructure/scripts/prod-deploy.sh"
    ]

    connection {
      type        = "ssh"
      user        = var.ssh_user
      private_key = file(pathexpand(var.ssh_key_path))
      host        = var.server_ip
      port        = var.ssh_port
    }
  }
}

output "application_url" {
  value       = "https://outofthebox.eticalgarve.com"
  description = "URL where the application is accessible"
}
