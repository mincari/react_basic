import React, { Component } from 'react';

class ReadArticle extends Component {
  render() {
    console.log('ReadArticle 실행');
    let classNames = 'menu';
    if (this.props.mode === 'welcome') {
      classNames += ' hidden';
    }
    return (
      <section>
        <article>
          <h2>{this.props.title}</h2>
          <p>{this.props.desc}</p>
          <ul className={classNames}>
            <li>
              <a
                href="/update"
                className="secondary"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onChangeMode('update');
                }}
              >
                update
              </a>
            </li>
            <li>
              <input
                type="button"
                className="danger"
                value="delete"
                onClick={(e) => {
                  e.preventDefault();
                  this.props.onChangeMode('delete');
                }}
              />
            </li>
          </ul>
        </article>
      </section>
    );
  }
}

export default ReadArticle;
