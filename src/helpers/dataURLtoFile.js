

// Function to convert data URL to File
export const dataURLtoFile = (dataURL, filename) => {
    // Convert the data URL to a Blob
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const byteCharacters = atob(parts[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });

    // Wrap the Blob in a File object with the specified filename
    return new File([blob], filename);
};