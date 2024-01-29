import os

def create_folders(root_directory, folders):
    # Create specified folders if they don't exist
    for folder in folders:
        folder_path = os.path.join(root_directory, folder)
        if not os.path.exists(folder_path):
            os.makedirs(folder_path)
            print(f"Created folder: {folder_path}")

def move_and_rename_files(root_directory):
    # Define the category folders
    categories = ["Eyes", "Accessory", "Mouth", "Head", "Body", "Helmet", "Background"]

    # Ensure the category folders exist
    create_folders(root_directory, categories)

    # Walk through the directory
    for dirpath, dirnames, filenames in os.walk(root_directory):
        for filename in filenames:
            if filename.startswith("blunk_000"):
                # Extract the category index from the 10th character (index 9)
                category_index = int(filename[9])

                # Check if the category index is valid
                if 0 <= category_index < len(categories):
                    # Remove everything up to and including the last underscore
                    new_name = filename.split("_")[-1]

                    # Remove dashes from the new filename
                    new_name = new_name.replace("-", " ")

                    # Determine the new directory based on category
                    new_dir = os.path.join(root_directory, categories[category_index])

                    # Full paths for old and new file locations
                    old_file = os.path.join(dirpath, filename)
                    new_file = os.path.join(new_dir, new_name)

                    # Move and rename the file
                    os.rename(old_file, new_file)
                    print(f"Moved and renamed '{old_file}' to '{new_file}'")
                else:
                    print(f"Invalid category index for file: {filename}")

# Specify the root directory
directory_path = "./Layers"
move_and_rename_files(directory_path)
