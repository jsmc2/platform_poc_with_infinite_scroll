function NoticeHandling() {
  const info = {
    store: undefined,
    handlers: undefined
  };
  const ii = info;
  const Publik = {
    setStore,
    setNoticeHandlers,
    notify
  };
  return Publik;

  // HOISTED PUBLIK METHODS (Have closures over module's info.)
  function setStore(store) {
    ii.store = store;
  }
  function setNoticeHandlers(handlers) {
    ii.handlers = handlers;
  }
  function notify(notice) {
    const handler = _getNoticeHandler(notice.subject);
    handler(notice, ii.store);
  }

  // HOISTED PRIVATE METHODS (Have closures over module's info.)
  function _getNoticeHandler(subject) {
    const handler = ii.handlers[subject];
    return handler;
  }
}
export default NoticeHandling();
