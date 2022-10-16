const RegistrarseFormulario= ()=>
    `
        <form>
            <div class="form-group mb-lg-3">
            <label for="nombre">Nombre</label>
            <input type="text" class="form-control" id="nombre">
            
         <div class="form-group mb-lg-3">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email">
            
            <div class="form-group mb-lg-3">
            <label for="usuario">usuario</label>
            <input type="text" class="form-control" id="usuario">
            
            </div>
            <div class="form-group mb-lg-3">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-primary mt-3">Registrarse</button>
        </form>
    
    ` 




export {RegistrarseFormulario}