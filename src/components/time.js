import '../index.css';

export default function Time(props) {
    return(
       <section class="time">
                <h4 class="nome">{props.nome}</h4>
                <ol class="cargos">
                    <ul class="cargo">{props.cargo1}</ul>
                    <ul class="cargo">{props.cargo2}</ul>
                </ol>
                <figure>
                    <img src={props.foto} alt=''></img>
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src='' alt=''></img>
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src='' alt=''></img>
                    <figcaption></figcaption>
                </figure>
                <figure>
                    <img src='' alt=''></img>
                    <figcaption></figcaption>
                </figure>
            </section>
        )
}