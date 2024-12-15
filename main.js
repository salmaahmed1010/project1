
function showPopup() {
    // Product abstract or description
    const productAbstract = `
      information is submitted
    `;

    // Show the SweetAlert2 popup with the product abstract
    Swal.fire({
      title: 'DONE',
      html: productAbstract, // Display the abstract in the popup
      icon: 'DONE',
      confirmButtonText: 'Close',
      
    });
}