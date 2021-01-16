import React from 'react'
import Border from '../../constants/border'

type Props = {
    content: any;
}
const SecondItem = ({ content }: Props) => {
    return (
        <div className="second-view">
            <Border color={'#eb483d'} />
            <br />
            {content.map((item) => (

                <div key={item.id}>
                    <h2>{item.headline}</h2>
                    <br></br>
                    <div className="description">
                        <p>{item.content}</p>
                    </div>
                </div>

            ))}
            <br />
            <h3>När försökte du sist imponera på för dina kompisar?</h3>
            <br />
            <form>
                <div>
                    <input type="checkbox" name="Idag" />
                    <label htmlFor="idag">Idag</label>
                </div>
                <div>
                    <input type="checkbox" name="Igår" />
                    <label htmlFor="igår">Igår</label>
                </div>
                <div>
                    <input type="checkbox" name="Minns inte" />
                    <label htmlFor="igår">Minns inte</label>
                </div>
            </form>
        </div >
    )

}

export default SecondItem