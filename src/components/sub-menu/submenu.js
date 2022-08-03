import React, { useState, useEffect, useCallback, useRef } from "react";
import "./submenu.css"
import emailjs from '@emailjs/browser';
import { FiCheckCircle } from "react-icons/fi";

const Submenu1 = () => {
    const form = useRef();
    const [send, setSend] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aep1qdm', 'template_un5gnbh', form.current, '3kegCCRWINicTs7nW')
            .then((result) => {
                document.getElementById("email").value = "";
                document.getElementById("prenom").value = "";
                document.getElementById("nom").value = "";
                document.getElementById("description").value = "";
                setSend(1)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="menuContainer">
            <div className="firstPart">
                <div className="emailSender">
                    <form ref={form} onSubmit={sendEmail}>
                        <div class="form__group">
                            <label for="name" class="form__label">Email</label>
                            <input  type="email" class="form__field" placeholder="" name="email" id="email "required />
                        </div>
                        <div class="form__group">
                            <label for="name" class="form__label">Prénom</label>
                            <input type="text" class="form__field" placeholder="" name="prenom" id='prenom' required />
                        </div>
                        <div class="form__group">
                            <label for="name" class="form__label">Nom</label>
                            <input type="text" class="form__field" placeholder="" name="nom" id='nom' required />
                        </div>
                        <div class="form__group">
                            <label for="name" class="form__label">Description</label>
                            <textarea rows="4" type="text" class="form__field" placeholder="" name="description" id='description' required />
                        </div>
                        <div className="submitContainer">
                            <input className="submitButton" type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
            <div className="secondPart">
                <div className="titleSecondPart">
                    <div className="title">
                        <p>Demander un devis</p>
                    </div>
                </div>
                <div className="flexContainer">
                    <div className="textContainer">
                        <div className="devisDescription">
                            <p>Demandez un devis en remplissant le formulaire a gauche du menu</p>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <div className="checked">
                           <p>{send === 1 ? "Devis envoyer avec succès!": "Envoyer un devis maintenant !"}</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};


export default Submenu1;