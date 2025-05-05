import { Button } from "@/components/ui/button";
import { Loader2, UploadCloud, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";

export interface ImageDropzoneProps {
  currentImage?: string;
  onUpload: (file: File) => void;
  isUploading?: boolean;
  helpText?: string;
  showPreview?: boolean;
  maxSizeMB?: number;
  imageClassName?: string;
  accept?: string;
  onRemove?: () => void;
}

export const ImageDropzone = ({
  currentImage,
  onUpload,
  showPreview = true,
  isUploading = false,
  helpText = "PNG, JPG or GIF up to 10MB",
  maxSizeMB = 10,
  imageClassName = "max-h-[200px] w-full object-cover",
  accept = "image/*",
  onRemove,
}: ImageDropzoneProps) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Format file size
  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // Check if file size is within limit
  const isFileSizeValid = (file: File) => {
    return file.size <= maxSizeMB * 1024 * 1024;
  };

  // Handle drag events
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);

      const file = e.dataTransfer.files?.[0];
      if (!file) return;

      // Validate file type based on accept prop
      const acceptTypes = accept.split(",").map((type) => type.trim());
      const isValidType = acceptTypes.some((type) => {
        if (type === "image/*") return file.type.startsWith("image/");
        return file.type === type;
      });

      if (!isValidType) {
        alert("Invalid file type. Please upload an image file.");
        return;
      }

      if (!isFileSizeValid(file)) {
        alert(`File size exceeds ${maxSizeMB}MB limit.`);
        return;
      }

      setSelectedFile(file);
      onUpload(file);
    },
    [accept, maxSizeMB, onUpload]
  );

  // Handle file selection via input
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!isFileSizeValid(file)) {
        alert(`File size exceeds ${maxSizeMB}MB limit.`);
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        return;
      }

      setSelectedFile(file);
      onUpload(file);
    },
    [maxSizeMB, onUpload]
  );

  // Handle file removal
  const handleRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedFile(null);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      if (onRemove) {
        onRemove();
      }
    },
    [onRemove]
  );

  return (
    <div className="mt-2 space-y-4">
      {/* Current image preview */}
      {currentImage && showPreview && (
        <div className="bg-card relative overflow-hidden rounded-md border shadow">
          <img src={currentImage} alt="Image preview" className={imageClassName} />
        </div>
      )}

      {/* Dropzone */}
      <div
        className={`bg-background flex flex-col items-center justify-center rounded-lg border-2 ${
          isDragActive ? "border-primary bg-primary/10" : "border-border border-dashed"
        } p-6 transition-colors duration-300 ${isUploading ? "pointer-events-none opacity-80" : "cursor-pointer"} `}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={handleFileChange} disabled={isUploading} />

        {isUploading ? (
          <div className="flex flex-col items-center gap-2">
            <Loader2 className="text-primary h-6 w-6 animate-spin" />
            <p className="text-sm">Uploading image...</p>
          </div>
        ) : selectedFile ? (
          <div className="flex items-center gap-4 py-2">
            <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded border">
              <img src={URL.createObjectURL(selectedFile)} alt={selectedFile.name} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col items-start truncate">
              <p title={selectedFile.name} className="max-w-full truncate text-sm">
                {selectedFile.name}
              </p>
              <p className="text-muted-foreground text-xs">{formatBytes(selectedFile.size)}</p>
            </div>
            <Button size="icon" variant="link" className="text-muted-foreground hover:text-foreground shrink-0 justify-self-end" onClick={handleRemove}>
              <X size={16} />
            </Button>
          </div>
        ) : (
          <>
            <UploadCloud size={24} className="text-muted-foreground mb-2" />
            <p className="text-center text-sm font-medium">Drag and drop or click to upload</p>
            <p className="text-muted-foreground mt-1 text-xs">{helpText}</p>
          </>
        )}
      </div>
    </div>
  );
};
