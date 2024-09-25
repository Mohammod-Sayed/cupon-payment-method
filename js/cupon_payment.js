document.getElementById('input_id').addEventListener('keyup', ()=>{
    const applyButton = document.getElementById('apply_btn')
    const priceAmount = parseFloat(document.getElementById('price_amount').innerText)
    const discountAmount = parseFloat(document.getElementById('discount_id').innerText)
    const paymentAmount = document.getElementById('payment_amount')
    const inputField = document.getElementById('input_id')
    const inputFieldValue = inputField.value
    if(inputFieldValue === 'sayed30'){
        applyButton.removeAttribute('disabled')
        applyButton.addEventListener('click', ()=>{
            if(inputFieldValue === 'sayed30'){
                const discountPrice = priceAmount - (priceAmount*(discountAmount/100))
                paymentAmount.innerText = discountPrice
                paymentAmount.style.color = '#0369A1'
            }
        })
        applyButton.style.opacity = 1
        applyButton.addEventListener('mouseover', ()=>{
            applyButton.style.backgroundColor = '#0369A1'
        })
        applyButton.addEventListener('mouseleave', ()=>{
            applyButton.style.backgroundColor = '#14532D'
        })
    }
    else{
        applyButton.setAttribute('disabled', true)
        paymentAmount.innerText = priceAmount
        applyButton.style.opacity = 0.5
    }
})