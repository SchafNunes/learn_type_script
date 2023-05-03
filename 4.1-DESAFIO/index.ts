class Review {
    feedback

    constructor(feedback: number | boolean) {
        this.feedback = feedback
    }
}

const nota1 = new Review(1)
const nota2 = new Review(2)
const nota3 = new Review(3)
const nota4 = new Review(4)
const nota5 = new Review(false)


console.log(typeof nota1)

function showReview(review: Review ) {
    if(typeof review.feedback === 'boolean' && review.feedback === false) {
        console.log("Sem resposta")  
    } else if (typeof review.feedback === 'number' && review.feedback === 1) {
        console.log("nota 1")
    } else if (typeof review.feedback === 'number' && review.feedback === 2) {
        console.log("nota 2")
    } else if (typeof review.feedback === 'number' && review.feedback === 3) {
        console.log("nota 3")
    } else if (typeof review.feedback ==='number' && review.feedback === 4) {
        console.log("nota 4")
    }
    
}

showReview(nota1)
showReview(nota2)
showReview(nota3)
showReview(nota4)
showReview(nota5)

// Outra maneira 

type Aval = number | boolean

function showUserReview(aval: Aval) {
    if(!aval) {
        console.log("Você não avaliou o produto!")
        return
    }

    console.log(`A nota que você deu foi: ${aval}, obrigado!`)
}

showUserReview(3)
showUserReview(2)
showUserReview(false)
