import './index.css'

const TabItem = props => {
  const {tabDetails, selectActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const updateClassName = isActive ? 'tab-button active' : 'tab-button'
  const onClickTabButton = () => {
    selectActiveTabId(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={updateClassName}
        type="button"
        onClick={onClickTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
