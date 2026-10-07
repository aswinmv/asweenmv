import { useLanguage } from '../contexts/LanguageContext';

export default function NewsletterSection() {
  const { t } = useLanguage();

  return (
    <section id="newsletter" className="py-8" aria-labelledby="newsletter-heading">
      <div className="max-w-2xl">
        <h2 id="newsletter-heading" className="text-2xl font-semibold text-gray-900 mb-8">
          {t('newsletter.heading')}
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {t('newsletter.intro')}
        </p>

        <div className="sib-form" style={{ textAlign: 'center', backgroundColor: '#EFF2F7' }}>
          <div id="sib-form-container" className="sib-form-container">
            <div
              id="error-message"
              className="sib-form-message-panel"
              style={{
                fontFamily: 'Helvetica, sans-serif',
                fontSize: '16px',
                textAlign: 'left',
                color: '#661d1d',
                backgroundColor: '#ffeded',
                borderColor: '#ff4949',
                borderRadius: '3px',
                maxWidth: '540px',
              }}
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  {t('newsletter.error')}
                </span>
              </div>
            </div>
            <div></div>
            <div
              id="success-message"
              className="sib-form-message-panel"
              style={{
                fontFamily: 'Helvetica, sans-serif',
                fontSize: '16px',
                textAlign: 'left',
                color: '#085229',
                backgroundColor: '#e7faf0',
                borderColor: '#13ce66',
                borderRadius: '3px',
                maxWidth: '540px',
              }}
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  {t('newsletter.success')}
                </span>
              </div>
            </div>
            <div></div>
            <div
              id="sib-container"
              className="sib-container--large sib-container--vertical"
              style={{
                maxWidth: '540px',
                textAlign: 'center',
                backgroundColor: 'rgba(255,255,255,1)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: '#C0CCD9',
                borderRadius: '3px',
                direction: 'ltr',
              }}
            >
              <form
                id="sib-form"
                method="POST"
                action="https://4ff89075.sibforms.com/serve/MUIFAHuR0U7icwuNdyYZjHNeKjhI8BveqPJ9i9Iug45tujKhoNAUWKLrW8JQVVhOEB_BDsaLBrObF3CNWrMQO9tfk9YlusJugKtv2uvbeckPvjTvROhRmgdtfKF0SBbFf9LoGTerrgRLUams2EOrBK-p5D2fi_DR30qBjKqdKt8hm9T2qg3LyMPSzJgoQZ-pDqNF_AqGPT84DeiknQ=="
                data-type="subscription"
              >
                <div style={{ padding: '8px 0' }}>
                  <div
                    className="sib-form-block"
                    style={{
                      fontFamily: 'Helvetica, sans-serif',
                      fontSize: '32px',
                      fontWeight: 700,
                      color: '#3C4858',
                      backgroundColor: 'transparent',
                      textAlign: 'left',
                    }}
                  >
                    <p>{t('newsletter.title')}</p>
                  </div>
                </div>

                <div style={{ padding: '8px 0' }}>
                  <div
                    className="sib-form-block"
                    style={{
                      fontFamily: 'Helvetica, sans-serif',
                      fontSize: '16px',
                      color: '#3C4858',
                      backgroundColor: 'transparent',
                      textAlign: 'left',
                    }}
                  >
                    <div className="sib-text-form-block">
                      <p>{t('newsletter.subtitle')}</p>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '8px 0' }}>
                  <div className="sib-input sib-form-block">
                    <div className="form__entry entry_block">
                      <div className="form__label-row">
                        <label
                          className="entry__label"
                          style={{
                            fontWeight: 700,
                            textAlign: 'left',
                            fontFamily: 'Helvetica, sans-serif',
                            fontSize: '16px',
                            color: '#3c4858',
                          }}
                          htmlFor="EMAIL"
                          data-required="*"
                        >
                          {t('newsletter.emailLabel')}
                        </label>
                        <div className="entry__field">
                          <input
                            className="input"
                            type="text"
                            id="EMAIL"
                            name="EMAIL"
                            autoComplete="off"
                            placeholder="EMAIL"
                            data-required="true"
                            required
                          />
                        </div>
                      </div>
                      <label
                        className="entry__error entry__error--primary"
                        style={{
                          fontFamily: 'Helvetica, sans-serif',
                          fontSize: '16px',
                          textAlign: 'left',
                          color: '#661d1d',
                          backgroundColor: '#ffeded',
                          borderColor: '#ff4949',
                          borderRadius: '3px',
                        }}
                      ></label>
                      <label
                        className="entry__specification"
                        style={{
                          fontFamily: 'Helvetica, sans-serif',
                          fontSize: '12px',
                          textAlign: 'left',
                          color: '#8390A4',
                        }}
                      >
                        {t('newsletter.hint')}
                      </label>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '8px 0' }}>
                  <div className="sib-form-block" style={{ textAlign: 'left' }}>
                    <button
                      className="sib-form-block__button sib-form-block__button-with-loader"
                      style={{
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        backgroundColor: '#3E4857',
                        borderWidth: '0px',
                        borderRadius: '3px',
                      }}
                      form="sib-form"
                      type="submit"
                    >
                      <svg
                        className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                        viewBox="0 0 512 512"
                      >
                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                      </svg>
                      {t('newsletter.button')}
                    </button>
                  </div>
                </div>

                <input type="text" name="email_address_check" value="" className="input--hidden" />
                <input type="hidden" name="locale" value="en" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
