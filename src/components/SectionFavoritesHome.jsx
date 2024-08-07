import React from 'react';
import classNames from 'classnames/bind';

import { slides } from '../assets/data/carouselA.json';
import styles from './SectionFavoritesHome.module.scss';

import SectionTag from './SectionTag';
import CarouselA from './CarouselA';
import Button from './UI/Button/Button';

const cx = classNames.bind(styles);

export default function SectionFavoritesHome() {
    return (
        <section className={cx('favorites')}>
            <SectionTag text={'Favorites'} className={'amber'} />

            <div className={cx('content')}>
                <h2 className={cx('h2')}>What our customer love the most!</h2>

                <CarouselA data={slides} />

                <Button className="amber-01">Visit Store</Button>
            </div>
        </section>
    );
}
