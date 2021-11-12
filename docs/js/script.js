const copyText = document.querySelector("#id-transaction");
if (copyText) {
    const copyBtn = document.querySelector(".id-copy__btn");
    copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(copyText.value);
    });
}
