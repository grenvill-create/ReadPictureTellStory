import os
import sys
from PIL import Image

def compress_image(source_path, target_path, max_size=(1024, 1024), quality=80):
    try:
        with Image.open(source_path) as img:
            # Convert RGBA to RGB if saving as JPEG
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                # Create a white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3] if img.mode == 'RGBA' else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize image if it exceeds max_size
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Ensure target directory exists
            os.makedirs(os.path.dirname(target_path), exist_ok=True)
            
            # Save compressed image
            img.save(target_path, 'JPEG', quality=quality, optimize=True)
            original_size = os.path.getsize(source_path) / 1024
            compressed_size = os.path.getsize(target_path) / 1024
            print(f"Compressed {os.path.basename(source_path)}: {original_size:.1f}KB -> {compressed_size:.1f}KB")
            return True
    except Exception as e:
        print(f"Error compressing {source_path}: {e}")
        return False

def main():
    raw_dir = "raw_images"
    out_dir = os.path.join("public", "images")
    
    if not os.path.exists(raw_dir):
        os.makedirs(raw_dir)
        print(f"Created '{raw_dir}' folder. Please place images there.")
        return

    # Check if a specific file was passed
    if len(sys.argv) > 1:
        file_arg = sys.argv[1]
        if os.path.exists(file_arg):
            filename = os.path.basename(file_arg)
            name, _ = os.path.splitext(filename)
            target_path = os.path.join(out_dir, f"{name}.jpg")
            compress_image(file_arg, target_path)
            return

    # Otherwise compress all files in raw_dir
    files = [f for f in os.listdir(raw_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp'))]
    if not files:
        print(f"No images found in '{raw_dir}' to compress.")
        return

    print(f"Found {len(files)} images to compress...")
    for f in files:
        source_path = os.path.join(raw_dir, f)
        name, _ = os.path.splitext(f)
        target_path = os.path.join(out_dir, f"{name}.jpg")
        compress_image(source_path, target_path)

if __name__ == "__main__":
    main()
