import React, {useState} from 'react';
import Layout from "../Layout";
import axios from "axios";
import useScript from "../useScript";


const Feedback = () => {
    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    const [orderData, setOrderData] = useState({
        companyName: '',
        name: '',
        phone: '',
        comment: ''
    })

    const setValuesHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        orderData[inputName] = inputValue;
        setOrderData({...orderData})
    }

    const sendItems = (e) => {
        e.preventDefault()

        if (!orderData.name && !orderData.phone ) {
            alert('Error')
            return false;
        }

        let productData = {...orderData}

        setOrderData(productData)

        let formData = new FormData();

        for (let key in productData) {
            if (Array.isArray(productData[key])) {
                for (let keyInner in productData[key]) {
                    formData.append(`${key}[${keyInner}]`, productData[key][keyInner]);
                }
            } else {
                formData.append(key, productData[key]);
            }
        }

        let config = {
            method: 'post',
            url: 'http://umedia.travelticket.uz/api/site/feedback',
            headers: {
                'Content-Type': 'multipart/form-data;',
            },

            data: formData
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    return (
        <Layout>
            <main className="main">
                <section className="feedback-modal">
                    <div className="feedback-modal__container">
                        <div className="feedback-modal__header" data-aos="fade-right">
                            <div className="feedback-modal__title title-section"><span>проект</span>Обсудим</div>
                            <div className="feedback-modal__subtitle">Оставьте заявку, мы вам скоро позвоним!</div>
                        </div>
                        <form className="feedback-modal__form form" data-aos="fade-left">
                            <div className="feedback__form-group">
                                <label htmlFor="feedbackmodalFormInput1" className="feedback__form-label">Название
                                    компании</label>
                                <input className="feedback__form-input" id="feedbackmodalFormInput1"
                                       name="companyName"
                                       value={orderData.companyName}
                                       onChange={setValuesHandler}
                                       type="text" data-req data-error="error" placeholder="Введите название компании"/>
                            </div>
                            <div className="feedback__form-group">
                                <label htmlFor="feedbackmodalFormInput2" className="feedback__form-label">Ваш
                                    имя</label>
                                <input className="feedback__form-input" id="feedbackmodalFormInput2"
                                       name="name"
                                       value={orderData.name}
                                       onChange={setValuesHandler}
                                       type="text" data-req data-error="error" placeholder="Введите ваше имя"/>
                            </div>
                            <div className="feedback__form-group">
                                <label htmlFor="feedbackmodalFormInput3" className="feedback__form-label">Ваш номер
                                    телефона</label>
                                <div className="feedback__form-phone">
                                    <span className="feedback__form-phone-mask">+998</span>
                                    <input className="feedback__form-input" id="feedbackmodalFormInput3"
                                           name="phone"
                                           value={orderData.phone}
                                           onChange={setValuesHandler}
                                           type="text" data-req="phone" data-error="error"/>
                                </div>
                            </div>
                            <div className="feedback__form-group">
                                <label className="feedback__form-label">Тип проекта</label>
                                <div className="feedback__form-action _iselect_">
                                    <span className="_iselect_title_">-Наружная реклама</span>
                                    <ul className="_iselect_items_" role="listbox">
                                        <li role="option" className="_iselect_item_">-Наружная реклама</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feedback__form-group feedback__form-group-textarea">
                                <label htmlFor="feedbackmodalFormInput5" className="feedback__form-label">Расскажите о
                                    вашем проекте</label>
                                <textarea className="feedback__form-input" id="feedbackmodalFormInput5"
                                          name="comment"
                                          value={orderData.comment}
                                          onChange={setValuesHandler}
                                          data-req data-error="error" placeholder="Ваш ответ" />
                            </div>
                            <div className="feedback__form-group feedback__form-group-submit">
                                <button className="feedback__form-submit button-blue" type="submit"
                                        onClick={sendItems}>оставить заявку
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="feedback-modal__anim-items">
                        <div className="feedback-modal__anim-circle"/>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default Feedback;