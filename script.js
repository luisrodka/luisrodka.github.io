async function uploadImage() {
    const input = document.getElementById('imageInput');
    if (!input.files[0]) {
        alert('Please select an image first.');
        return;
    }

    const formData = new FormData();
    formData.append('image', input.files[0]);

    const response = await fetch('/detect', {
        method: 'POST',
        body: formData
    });

    const detections = await response.json();
    displayResult(detections);
}

function displayResult(detections) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<pre>${JSON.stringify(detections, null, 2)}</pre>`;
}
