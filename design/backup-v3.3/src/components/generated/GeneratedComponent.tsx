import React, { useState } from 'react';
import './jdk3.css';
type Page = 'home' | 'about' | 'contacts';
const details = {
  name: 'Общество с ограниченной ответственностью «Железнодорожная компания»',
  short: 'ООО «ЖДК»',
  inn: '7100068380',
  kpp: '710001001',
  ogrn: '1257100007702',
  email: 'ooojdk@mail.ru',
  director: 'Клейменов Роман Владимирович',
  bank: 'АО «АЛЬФА-БАНК»',
  account: '40702810704220000563',
  correspondent: '30101810200000000593',
  bik: '044525593'
};
const directions = [{
  number: '01',
  title: 'Сварка рельсовых плетей',
  text: 'Соединение рельсов в длинномерные плети с применением специализированного рельсосварочного оборудования.'
}, {
  number: '02',
  title: 'Сварка одиночных рельсов',
  text: 'Соединение рельсов стандартной длины для строительства, ремонта и содержания железнодорожного пути.'
}, {
  number: '03',
  title: 'Переходные рельсы',
  text: 'Сварка рельсов различных типов и профилей для применения на участках железнодорожного пути.'
}];
const picture = '/assets/hero-magicpath-revision2.jpg';
function Arrow() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 10h13m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" /></svg>;
}
function Logo({
  onClick
}: {
  onClick: () => void;
}) {
  return <button className="j3-logo" onClick={onClick} aria-label="ЖДК — главная"><span className="j3-mark">ЖДК<span className="j3-markbar" /></span><span className="j3-logo-small">ЖЕЛЕЗНОДОРОЖНАЯ<br />КОМПАНИЯ</span></button>;
}
function Signature() {
  return <div className="j3-signature"><span className="j3-signature-line" /><span>ЖДК</span><span className="j3-signature-line" /></div>;
}
function Site({
  page,
  setPage,
  mode
}: {
  page: Page;
  setPage: (v: Page) => void;
  mode: string;
}) {
  const nav = (to: Page) => {
    setPage(to);
  };
  return <div className={'j3-site ' + (mode === 'mobile' ? 'j3-phone' : 'j3-wide')}>
 <header className={'j3-header ' + (page === 'home' ? 'j3-header-dark' : 'j3-header-light')}>
 <Logo onClick={() => nav('home')} />
 <nav className="j3-nav" aria-label="Разделы сайта">
 <button onClick={() => nav('home')} className={page === 'home' ? 'selected' : ''}>Главная</button>
 <button onClick={() => nav('about')} className={page === 'about' ? 'selected' : ''}>О компании</button>
 <button onClick={() => nav('contacts')} className={page === 'contacts' ? 'selected' : ''}>Контакты</button>
 </nav>
 </header>
 <main key={page}>
 {page === 'home' ? <>
 <section className="j3-homehero">
 <div className="j3-homehero-photo"><img src={picture} alt="Рельсосварочная установка в промышленном цехе" /></div>
 <div className="j3-homehero-mask" />
 <div className="j3-hero-main">
 <h1>Рельсосварочное<br /><em>производство</em></h1>
 <p>Сварка рельсов, изготовление рельсовых плетей и поставка рельсовой продукции для железнодорожной инфраструктуры.</p>
 <div className="j3-hero-accent" />
 </div>
 </section>
 <section className="j3-section j3-directions">
 <div className="j3-dir-title"><h2>Направления деятельности</h2></div>
 <div className="j3-direction-rows">{directions.map(d => <article key={d.number}><div><h3>{d.title}</h3><p>{d.text}</p></div><div className="j3-dir-arrow"><Arrow /></div></article>)}</div>
 </section>
 <section className="j3-home-about"><div className="j3-home-about-decoration" aria-hidden="true">ЖДК</div><div className="j3-home-about-grid"><h2>О компании</h2><div className="j3-home-about-content"><p>ООО «ЖДК» — Железнодорожная компания, специализирующаяся на поставке рельсовой продукции и развитии рельсосварочного производства.</p><button className="j3-textlink" onClick={() => nav('about')}>Подробнее о ЖДК <Arrow /></button></div></div></section>
 </> : page === 'about' ? <>
 <section className="j31-information j31-about">
  <div className="j31-page-title"><h1>О компании</h1></div>
  <div className="j31-requisites">
   <section className="j31-group" aria-labelledby="j31-identity"><h2 id="j31-identity">Сведения о компании</h2>
    <dl><div><dt>Полное наименование</dt><dd>{details.name}</dd></div>
    <div><dt>Сокращённое наименование</dt><dd>{details.short}</dd></div>
    <div><dt>ИНН</dt><dd>{details.inn}</dd></div>
    <div><dt>КПП</dt><dd>{details.kpp}</dd></div>
    <div><dt>ОГРН</dt><dd>{details.ogrn}</dd></div>
    <div><dt>Генеральный директор</dt><dd>{details.director}</dd></div></dl>
   </section>
   <section className="j31-group" aria-labelledby="j31-bank"><h2 id="j31-bank">Банковские реквизиты</h2>
    <dl><div><dt>Банк</dt><dd>{details.bank}</dd></div>
    <div><dt>Расчётный счёт</dt><dd>{details.account}</dd></div>
    <div><dt>Корреспондентский счёт</dt><dd>{details.correspondent}</dd></div>
    <div><dt>БИК</dt><dd>{details.bik}</dd></div></dl>
   </section>
  </div>
 </section>
 </> : <>
 <section className="j31-information j31-contacts">
  <div className="j31-page-title"><h1>Контакты</h1></div>
  <section className="j31-management">
   <div className="j31-role">Генеральный директор</div>
   <h2>{details.director}</h2>
   <a className="j33-inline-email" href="mailto:ooojdk@mail.ru">{details.email}</a>
  </section>
 </section>
 </>}
 </main>
 <footer className="j3-footer"><div className="j3-footer-top"><Logo onClick={() => nav('home')} /><nav><button onClick={() => nav('home')}>Главная</button><button onClick={() => nav('about')}>О компании</button><button onClick={() => nav('contacts')}>Контакты</button></nav></div><div className="j3-footer-bottom"><span>© ООО «ЖДК»</span><span>ИНН {details.inn} · ОГРН {details.ogrn}</span></div></footer>
 </div>;
}
export const GeneratedComponent = () => {
  const [page, setPage] = useState<Page>('home');
  const [mode, setMode] = useState('desktop');
  return <div className="j3-workspace"><div className="j3-previewtoolbar"><div className="j3-previewname"><span className="j3-preview-dot" /><strong>ЖДК</strong><span>Три страницы сайта</span></div><div className="j3-viewportcontrol" role="group" aria-label="Версия просмотра"><button onClick={() => setMode('desktop')} className={mode === 'desktop' ? 'active' : ''}>Компьютер</button><button onClick={() => setMode('mobile')} className={mode === 'mobile' ? 'active' : ''}>Телефон</button></div></div><Site page={page} setPage={setPage} mode={mode} /></div>;
};