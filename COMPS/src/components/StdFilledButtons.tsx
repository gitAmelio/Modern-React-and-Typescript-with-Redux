import Button, { renderIcon } from "./Button";

const StdFilledButtons = () => {
  return (
    <div className="items-baseline gap-3 p-3 flex flex-col items-center">
        <Button >
          {renderIcon('plane')}
          Plain
        </Button>
        <Button success >
          {renderIcon('bell')}
          Click here
        </Button>
        <Button danger >
          {renderIcon('down')}
          Buy Now!
        </Button>
        <Button warning >
          {renderIcon('eye')}
          See Deal!
        </Button>
        <Button secondary >
          {renderIcon('palm')}
          Hide Ads
        </Button>
        <Button primary>
          {renderIcon('box')}
          Something!
        </Button>
    </div>
  )
}

export default StdFilledButtons;