const CheckoutForm = ({dataForm, handleChangeFormInput, handleSubmitForm}) => {
    return (
        <div className="checkout--form-container">
            <div>
                <h1 className="checkout--main-text">¡Tu compra está casi lista!</h1>
                <h2 className="checkout--sub-text">Necesitamos tus datos de contacto</h2>
            </div>
            <form onSubmit={handleSubmitForm} className="checkout--form">
                <div className="checkout--form-group">
                    <label htmlFor="fullname">Nombre completo:</label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={dataForm.fullname}
                        onChange={handleChangeFormInput}
                        className="checkout--input"
                    />
                </div>
                <div className="checkout--form-group">
                    <label htmlFor="phone">Teléfono (9 números):</label>
                    <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={dataForm.phone}
                        onChange={handleChangeFormInput}
                        className="checkout--input"
                    />
                </div>
                <div className="checkout--form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={dataForm.email}
                        onChange={handleChangeFormInput}
                        className="checkout--input"
                    />
                </div>
                <div className="checkout--form-group">
                    <label htmlFor="email2">Repetir Correo electrónico:</label>
                    <input
                        type="email"
                        id="email2"
                        name="email2"
                        value={dataForm.email2}
                        onChange={handleChangeFormInput}
                        className="checkout--input"
                    />
                </div>
                <div className="checkout--form-group">
                    <button className="checkout--submit-button" type="submit">Terminar compra</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;
