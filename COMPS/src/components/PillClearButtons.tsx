import Button, { renderIcon } from "./Button";

const PillClearButtons = () => {
  return (
    <div className="items-baseline gap-3 p-3 flex flex-col items-center">
        <Button rounded outlined>
          {renderIcon('plane')}
          Plain
        </Button>
        <Button success rounded outlined>
          {renderIcon('bell')}
          Click here
        </Button>
        <Button danger rounded outlined>
          {renderIcon('down')}
          Buy Now!
        </Button>
        <Button warning rounded outlined>
          {renderIcon('eye')}
          See Deal!
        </Button>
        <Button secondary rounded outlined>
          {renderIcon('palm')}
          Hide Ads
        </Button>
        <Button primary rounded outlined>
          {renderIcon('box')}
          Something!
        </Button>
    </div>
  )
}

export default PillClearButtons;