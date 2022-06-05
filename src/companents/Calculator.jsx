import React, {useEffect, useState} from 'react';
import useScript from "../useScript";
import calculatorData from '../json/calculator.json';



const Calculator = () => {
     const [calculatorInfo, setCalculatorInfo] = useState([])

console.log(calculatorInfo)
    const fetchCategories = async () => {
        const response = await calculatorData;
        setCalculatorInfo(response);
        return response;
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    return (
        <div className="calculate">
            <div className="calculate__body">
                <div className="calculate__row calculate__row-1">
                    <div className="calculate__form-group">
                        <div className="form-group">
                            <div className="form-group__label">Выберите услугу</div>
                            <div className="form-group__action _iselect_">
                                <span className="_iselect_title_" >-Наружная реклама</span>
                                <ul className="_iselect_items_" role="listbox">
                                    <li role="option" className="_iselect_item_">-SMM</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="calculate__form-group">
                        {calculatorInfo.map((item, index) => <div className="form-group" key={Date.now() * index}>
                            <div className="form-group__label">Выберите услугу</div>
                            <div className="form-group__action _iselect_">
                                <span className="_iselect_title_">{item.title}</span>
                                <ul className="_iselect_items_" role="listbox">
                                    <li role="option" className="_iselect_item_">none</li>
                                </ul>
                            </div>
                        </div>)}
                    </div>
                    <div className="calculate__form-group">
                        <div className="form-group" >
                            <div className="form-group__label">Выберите районы</div>
                            <div className="form-group__action _iselect_">
                                <span className="_iselect_title_"></span>
                                <ul className="_iselect_items_" role="listbox">
                                    <li role="option" className="_iselect_item_">
                                        none
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calculate__row calculate__row-2">

                    <div className="form-group">
                        <div className="form-group__label">Выберите тип видео</div>
                        <div className="form-group__action _iselect_">
                            <span className="_iselect_title_">Моушен</span>
                            <ul className="_iselect_items_" role="listbox">
                                <li role="option" className="_iselect_item_">Моушен1
                                </li>
                                <li role="option" className="_iselect_item_">Моушен2
                                </li>
                                <li role="option" className="_iselect_item_">Моушен3
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="calculate__form-group calculate-info">
                        <div className="form-group">
                            <div className="form-group__label">Выберите тип видео</div>
                            <div className="form-group__action _iselect_">
                                <span className="_iselect_title_">Моушен</span>
                                <ul className="_iselect_items_" role="listbox">
                                    <li role="option" className="_iselect_item_">Моушен1
                                    </li>
                                    <li role="option" className="_iselect_item_">Моушен2
                                    </li>
                                    <li role="option" className="_iselect_item_">Моушен3
                                    </li>
                                </ul>
                            </div>
                        </div>
                       {/* <div className="form-group form-group__quantity">
                            <div className="form-group__label">Количество</div>
                            <div className="form-group__action" data-quantity>
                                <button className="_icon-arrow-chevron"
                                        data-quantity-decrease
                                        type="button"/>
                                <input defaultValue={0} type="text" data-quantity-value/>
                                <button className="_icon-arrow-chevron"
                                        data-quantity-increase
                                        type="button"/>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
            <div className="calculate__footer">
                <button className="calculate__button" type="button">Рассчитать</button>
                <div className="calculate__total">
                    <div className="calculate__total-label">Приблизительная <br/> стоимость
                    </div>
                    <div className="calculate__total-summ">4000000</div>
                </div>
            </div>
            <div className="calculate-box__footer">
                <div className="calculate-box__footer-text text">Понимаем, сложно
                    определиться,
                    мы вам поможем, звоните прямо сейчас
                </div>
                <a href="tel:+998 97 721-12-12" className="calculate-box__footer-link button-grey">Позвоните
                    нам</a>
            </div>
        </div>
    );
};

export default Calculator;