import Button, { renderIcon } from "./Button";

const StdClearButtons = () => {
  return (
    <div className="w-[30%] items-baseline gap-3 p-3 flex flex-col items-center">
      <div>
        <Button outlined>
          {renderIcon('plane')}
          Plain
        </Button>
      </div>
      <div>
        <Button success outlined>
          {renderIcon('bell')}
          Click here!!!
        </Button>
      </div>
      <div>
        <Button danger outlined>
          {renderIcon('down')}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning outlined>
          {renderIcon('eye')}
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outlined>
          {renderIcon('palm')}
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary outlined>
          {renderIcon('box')}
          Something!
        </Button>
      </div>
    </div>
  )
}

export default StdClearButtons;