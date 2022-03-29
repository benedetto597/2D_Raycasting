let walls = []; 
let ray; 
let particle; 

// Mover la particula automaticamente
let xoff = 0;
let yoff = 10000; 

function setup(){
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        walls.push(new Boundary(random(width), random(height), random(width), random(height)));
    }

    // Crear boundarie para los limites del canvas
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(width, height, 0, height));
    walls.push(new Boundary(0, height, 0, 0));

    particle = new Particle();
}

function draw(){
    background(0);
    for (let wall of walls) {
        wall.show();
    } 
    
    // Mover la particula con el mouse
    // particle.update(mouseX, mouseY);

    // Mover la particula automaticamente
    particle.update(noise(xoff) * width, noise(yoff) * height);
    particle.show();
    particle.look(walls);

    xoff += 0.01;
    yoff += 0.01;
    
    // ---------- Tratamiento de un ray individual ---------- // 
    /* ray.show();
    --> Hacer que el rayo siga al mouse
    ray.looAt(mouseX, mouseY);

    --> retornar el punto del ray si intercepta o choca con el boundary o wall
    let pt = ray.cast(wall);
     if(pt){
        fill(255);
        ellipse(pt.x, pt.y, 8, 8);
    }
    */
}