import React from 'react'
import './index.scss'
import { withTranslation } from 'react-i18next';
import Picture from '../Picture';

function Info({ t }) {

    return (
        <section className="info">
            <div className="info__content">
                <div className="container">
                    <div className="info-block info-block_start" id="entertainment">
                        <div className="info-block__content">
                            <h2><span>BY</span> Entertainment</h2>

                            <hr />

                            <div className="info-block__footer">
                                <h6>{t('parus')} <span>PARUS</span></h6>

                                <a href="https://parusfest.com/" className="link link_primary">{t('details')}</a>
                            </div>
                        </div>
                        <Picture pictureName="info-block1" pictureAlt="BY Entertainment" />
                        <a href="https://parusfest.com/" className="link link_primary visible-md">{t('details')}</a>
                    </div>
                    <div className="info-block info-block_end" id="gastro">
                        <Picture pictureName="info-block2" pictureAlt="BY Entertainment" />
                        <a href="https://berezka.ae/" className="link link_primary visible-md">{t('details')}</a>
                        <div className="info-block__content">
                            <h2><span>BY</span> Gastro</h2>

                            <hr />
                            <div className="info-block__footer">
                                <h6>{t('gastro')} <span>BEREZKA SHOW RESTAURANT</span></h6>

                                <a href="https://berezka.ae/" className="link link_primary">{t('details')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation()(Info)
