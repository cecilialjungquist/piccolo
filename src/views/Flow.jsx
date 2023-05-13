import CardStack from "../Components/CardStack";
import GoBackBtn from "../Components/GoBackBtn";

function Flow() {

    return (
        <section className="flow">
            <section className="intro">
                <h1>Flow</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Volutpat quis velit feugiat quis. Eget faucibus lacus cum massa faucibus pharetra fames.
                    <br/>Tempor ridiculus dui sed convallis. Lorem ipsum dolor sit amet consectetur. Volutpat quis velit feugiat quis. Eget faucibus lacus cum massa faucibus pharetra fames. Tempor ridiculus dui sed convallis.</p>
            </section>
            <section>
                <CardStack />
            </section>
            <GoBackBtn />
        </section>
    );
}

export default Flow;