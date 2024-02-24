import React from "react";

export default function Form(){
    return(
        <section class="formulario">
                <h3>Contactanos</h3>
                <p>
                    ¡Gracias por visitar nuestro sitio web dedicado a River Plate! Valoramos tu interés y estamos aquí para responder a tus preguntas, comentarios o cualquier otra consulta que puedas tener. Tu opinión es importante para nosotros, y nos esforzamos por brindarte la mejor experiencia relacionada con el club.
                </p>
                <p>
                    Si deseas ponerte en contacto con nosotros, por favor completa la siguiente información de contacto:
                </p>
                <form action="envio.php" method="post" class="contacto">
                    <div class="renglon">
                        <div class="label">
                            <label for="nombre">Nombre y Apellido</label>
                        </div>
                        <input type="text" name="nombre" id="nombre" placeholder="Nombre completo"/>
                    </div>
                    <div class="renglon">
                        <div class="label">
                            <label for="telefono">Numero de telefono</label>
                        </div>
                        <input type="text" name="telefono" id="telefono" placeholder="Telefono"/>
                    </div>
                    <div class="renglon">
                        <div class="label">
                            <label for="dni">DNI</label>
                        </div>
                        <input type="text" name="dni" id="dni" placeholder="DNI"/>
                    </div>
                    <div class="renglon">
                        <div class="label">
                            <label for="email">Email</label>
                        </div>
                        <input type="Email" name="email" id="email" placeholder="Email"/>
                    </div>
                    <div class="renglon">
                        <div class="label">
                            <label for="motivo">Motivo</label>
                        </div>
                        <textarea name="motivo" id="motivo" cols="30" rows="10" placeholder="Escribenos un mensaje"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
                <div class="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.275004513702!2d-58.4510574247746!3d-34.5465918544826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb43ae6018ddf%3A0x3d7f60a75bfa308a!2sEstadio%20M%C3%A2s%20Monumental!5e0!3m2!1ses-419!2sar!4v1699384424815!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="info">
                        <p>Telefono: 01147891200</p>
                        <p>Direccion: Av. Pres. Figueroa Alcorta 7597, C1428 CABA</p>
                        <a href="https://www.cariverplate.com.ar/">https://www.cariverplate.com.ar/</a>
                        <p>Estadio de fútbol y recinto de conciertos; sede del club River Plate y de la Copa Mundial de la FIFA de 1978.</p>
                    </div>
                </div>
            </section>
    )
}