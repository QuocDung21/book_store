export  const  formatCurrency =(number) =>{
    if (isNaN(number)) {
        return "Không hợp lệ";
    }

    const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    });

    return formatter.format(number);
}