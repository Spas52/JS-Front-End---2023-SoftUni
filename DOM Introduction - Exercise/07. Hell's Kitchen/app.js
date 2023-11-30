function solve() {
   // Add a click event listener to the button with id 'btnSend'
   document.querySelector('#btnSend').addEventListener('click', onClick);

   // Function that is called when the button is clicked
   function onClick() {
      // Parse the JSON input from the textarea
      const resurantsArr = JSON.parse(document.querySelector("#inputs textarea").value);
      
      // Initialize variables to store information about restaurants
      let resturants = [];
      let bestResturant;
      let averageSalary = 0;

      // Get references to HTML elements for displaying results
      let bestResturantResult = document.querySelector("#bestRestaurant p");
      let bestResturantWorkersResult = document.querySelector("#workers p");

      // Clear previous content in the workers result section
      bestResturantWorkersResult.textContent = "";

      // Loop through each restaurant data from the parsed array
      for (const resturantData of resurantsArr) {
         // Split restaurant data into name and workers information
         const resturantAndWorkers = resturantData.split(" - ");
         const resturantName = resturantAndWorkers[0];
         const workersString = resturantAndWorkers[1];
         const workersArr = workersString.split(", ");

         // Find the restaurant in the array or initialize if not found
         let resturant = resturants.find(r => r.resturantName === resturantName);

         // Log the current state of the restaurant (for debugging)
         console.log(resturant);

         // If the restaurant is not found, initialize it
         if (!resturant) {
            resturant = {
               resturantName
            };
            resturant.workers = [];
         }

         // Loop through each worker's information
         for (const workersAndSalary of workersArr) {
            const workerAndSalary = workersAndSalary.split(" ");

            // Create an object for each worker and add it to the restaurant's workers array
            let worker = {
               name: workerAndSalary[0],
               salary: workerAndSalary[1]
            }

            resturant.workers.push(worker);
         }

         // Add the restaurant to the array
         resturants.push(resturant);
      }

      // Loop through each restaurant to find the best one based on average salary
      for (const resturant of resturants) {
         let currentAverageSalary = 0;
         let bestSalary = 0;

         // Loop through each worker in the restaurant
         for (const worker of resturant.workers) {
            // Convert salary to a number
            let salary = Number(worker.salary);
            
            // Calculate current average salary
            currentAverageSalary += salary;

            // Update best salary if the current worker has a higher salary
            if (salary > bestSalary) {
               bestSalary = salary;
            }
         }

         // Calculate the average salary for the current restaurant
         currentAverageSalary = currentAverageSalary / resturant.workers.length;

         // Update the best restaurant if the current one has a higher average salary
         if (currentAverageSalary > averageSalary) {
            averageSalary = currentAverageSalary;

            // Store information about the best restaurant
            bestResturant = {
               resturantName: resturant.resturantName,
               averageSalary: currentAverageSalary,
               bestSalary: bestSalary,
               workers: []
            }

            // Copy workers from the current restaurant to the best restaurant
            for (const worker of resturant.workers) {
               bestResturant.workers.push(worker);
            }
         }
      }

      // Sort the workers of the best restaurant based on salary in descending order
      bestResturant.workers = bestResturant.workers.sort((a, b) => b.salary - a.salary);

      // Display the result in the HTML
      bestResturantResult.textContent = `Name: ${bestResturant.resturantName} Average Salary: ${bestResturant.averageSalary.toFixed(2)} Best Salary: ${bestResturant.bestSalary.toFixed(2)}`;

      // Display each worker's information in the HTML
      bestResturant.workers.forEach(worker => {
         bestResturantWorkersResult.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
      });
   }
}
