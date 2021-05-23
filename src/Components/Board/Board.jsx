import React, { useEffect, useState } from 'react';

import './Board.scss'
import see__more from '../../static/see_more.svg'

import Card from '../Card/Card'
import Loader from '../Loader/Loader'


const Board = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [dataLoaded, setDataLoaded] = useState(false);
    const [page, setPage] = useState(1);

    
    const limit = 16;
    const urlLoad = "https://6075786f0baf7c0017fa64ce.mockapi.io/products"


    useEffect(() => {
        setIsLoading(true)

        const searchParams = new URLSearchParams({
            page: page.toString(),
            limit: limit.toString()
        });

        fetch(`${urlLoad}?${searchParams.toString()}`).then((resp) => {
            return resp.json()
        }).then((result) => {
            if (result.length === 0 || result.length < limit) {
                setDataLoaded(true)
            }

            setProducts((prev) => {
                return [...prev, ...result]
            })

            setIsError(false)
        }).catch((e) => {
            setIsError(true)
            console.log('Error', e)
        }).finally(() => {
            setIsLoading(false)
        })
    }, [page])


    const nextPage = () => {
        setPage((prev) => prev + 1)
    }


    if (isError) {
        return <div>Server error...</div>
    }


    return (
        <div className='board'>

            <div className="board__title">
                Похожие объявления
            </div>

            <div className="board__cards">
                {
                    products.map((item, index) => {
                        return (
                            <Card
                                key={index}
                                oldPrice={item.oldPrice}
                                price={item.price}
                                title={item.title}
                                locality={item.locality}
                                date={item.date}
                                seen={item.seen}
                            />
                        )
                    })
                }
            </div>


            {isLoading ?
                <div className='board__cards'>
                    <Loader />
                    <Loader />
                    <Loader />
                    <Loader />
                </div>
                :
                ''
            }


            <div className="board__see-more" onClick={dataLoaded ? null : nextPage}>
                {dataLoaded ? (
                    <div className="board__see-more__text">
                        Все данные загружены
                    </div>
                ) : (
                    <>
                        <div className="board__see-more__text">
                            Показать еще
                        </div>
                        <div className="board__see-more__icon">
                            <img src={see__more} alt="see more" />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Board;