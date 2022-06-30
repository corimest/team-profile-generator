function generateSite(data) {
    return ` 
    <!DOCTYPE html>
    <html lang="en-us">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
        <header>
            <h1>The Team</h1>
        </header>
<body>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${teamMembers.Manager.name}</h3>
                        <h4>Manager</h4><i class="material-icons">content_paste</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4><i class="material-icons">content_paste</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <div class="col-4 mt-4">
                <div class="card h-100">
                    <div class="card-header">
                        <h3>${manager.name}</h3>
                        <h4>Manager</h4><i class="material-icons">content_paste</i>
                    </div>
                    <div class="card-body">
                        <p class="id">ID: ${manager.id}</p>
                        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                        <p class="office">Office Number: ${manager.officeNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
`;
}



module.exports = generateSite;