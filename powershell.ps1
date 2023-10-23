# Login to Azure
Connect-AzAccount

# Set variables
$resourceGroupName = "myResourceGroup"
$location = "eastus"
$storageAccountName = "mystorageaccount"
$skuName = "Standard_LRS"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
New-AzStorageAccount `
  -ResourceGroupName $resourceGroupName `
  -Name $storageAccountName `
  -Location $location `
  -SkuName $skuName `
  -Kind StorageV2 `
  -AccessTier Hot `
  -EnableHttpsTrafficOnly $true