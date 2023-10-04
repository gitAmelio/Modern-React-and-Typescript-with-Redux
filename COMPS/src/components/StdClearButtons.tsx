import Button, { renderIcon } from "./Button";

const StdClearButtons = () => {
  return (
    <div className="items-baseline gap-3 p-3 flex flex-col items-center">
        <Button outlined>
          {renderIcon('plane')}
          Plain
        </Button>
        <Button success outlined>
          {renderIcon('bell')}
          Click here
        </Button>
        <Button danger outlined>
          {renderIcon('down')}
          Buy Now!
        </Button>
        <Button warning outlined>
          {renderIcon('eye')}
          See Deal!
        </Button>
        <Button secondary outlined>
          {renderIcon('palm')}
          Hide Ads
        </Button>
        <Button primary outlined>
          {renderIcon('box')}
          Something!
        </Button>
    </div>
  )
}

export default StdClearButtons;