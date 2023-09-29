import Button, { renderIcon } from "./Button";

const PillClearButtons = () => {
  return (
    <div className=" w-[30%] items-baseline gap-3 p-3 flex flex-col items-center">
      <div>
        <Button rounded outlined>
          {renderIcon('plane')}
          Plain
        </Button>
      </div>
      <div>
        <Button success rounded outlined>
          {renderIcon('bell')}
          Click here!!!
        </Button>
      </div>
      <div>
        <Button danger rounded outlined>
          {renderIcon('down')}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning rounded outlined>
          {renderIcon('eye')}
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary rounded outlined>
          {renderIcon('palm')}
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded outlined>
          {renderIcon('box')}
          Something!
        </Button>
      </div>
    </div>
  )
}

export default PillClearButtons;