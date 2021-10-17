export const ADD_TO_CART = "ADD_TO_CART" //Yazım hatasında kaçmak için o isimlendirmeyi değişkene atadın
//export diyerek app.js de erişime açtın değişkenini
//export diye tanımlamazsan import da edemezsin
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"


//reduxın iki temel bileşeni var biri action diğeri reducer
//action fonksyonların, hareketlerin; reducer sepetin mesela değişimin gözlendiği state
//redux der ki bir action tanımladığında bana önce bir obje gönder


export function addToCart(product) {
    return { //return diyerek reduxın objesini verdin
        type : "ADD_TO_CART",  //actionunun adı
        payload: product //action sonucu statei etkileyecek olan veri

    }
}

export function removeFromCart(product) {
    return { 
        type : "REMOVE_FROM_CART",  
        payload: product 

    }
}