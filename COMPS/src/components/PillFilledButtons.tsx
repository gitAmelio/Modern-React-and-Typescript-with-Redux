import Button, { renderIcon } from "./Button";

const PillFIlledButtons = () => {
  return (
    <div className="items-baseline gap-3 p-3 flex flex-col items-center">
        <Button rounded>
          {renderIcon('plane')}
          Plain
        </Button>
        <Button success rounded>
          {renderIcon('bell')}
          Click here
        </Button>
        <Button danger rounded>
          {renderIcon('down')}
          Buy Now!
        </Button>
        <Button warning rounded>
          {renderIcon('eye')}
          See Deal!
        </Button>
        <Button secondary rounded>
          {renderIcon('palm')}
          Hide Ads
        </Button>
        <Button primary rounded>
          {renderIcon('box')}
          Something!
        </Button>
    </div>
  )
}

export default PillFIlledButtons;