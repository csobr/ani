import React from 'react'


const SecondItem: React.FC = () => {
    return (
        <div className="second-view">
            <div className="border"></div>
            <h2>Kompisar och familj	</h2>
            <div className="description">
                <p>Forskning har visat att du som tonåring tar större risker när kompisar är närvarande, kanske ett sätt att imponera. </p>
            </div>
            <h3>När försökte du sist imponera på för dina kompisar?</h3>
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
        </div>
    )

}

export default SecondItem