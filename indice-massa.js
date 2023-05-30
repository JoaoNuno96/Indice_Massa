

      var nome = prompt("What's your name:")
      var altura = prompt("Height (cm):")
      var peso = prompt("Weight (kg):")

      altura = parseFloat(altura / 100)
      peso = parseFloat(peso)


      var imc = (peso / (altura * altura))
      var imcfinal = Math.round(imc * 100) / 100
      var classificacao = ""


      if(imc < 16) {classificacao = "Low Weight - Take Precaution!"}
      else if (imc >= 16 && imc <=16.99) {classificacao = "Low Weight - Serius"}
      else if (imc >= 17 && imc <=18.49) {classificacao = "Low Weight"}
      else if (imc >= 18.50 && imc <=24.99) {classificacao = "Normal Weight"}
      else if (imc >= 25 && imc <=29.99) {classificacao = "Overweight"}
      else if (imc >= 30 && imc <=34.99) {classificacao = "Obesity I"}
      else if (imc >= 35 && imc <=39.99) {classificacao = "Obesity II"}
      else if (imc >= 40) {classificacao = "Obesity III"}


      document.write("<h1> Body Mass Calculator </h1>")
      document.write("Subjects Name: " + nome + "<br/>")
      document.write("Weight: " + peso + "kg" + "<br/>")
      document.write("Height: " + altura + "m" + "<br/>" + "<br/>")
      document.write("The user " + nome + " has a body mass of: " + imcfinal + ", which is represented as: " + classificacao + "<br/>")



