

let toastBox = document.getElementById('toastBox');
let successMsg = 'Successfully Submitted';
let errorMsg = 'Error should be rectified';
let invalidMsg = 'Invalid input, please enter correct data';

function showToast(msg) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    toastBox.appendChild(toast);

    // Auto-remove the toast after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
