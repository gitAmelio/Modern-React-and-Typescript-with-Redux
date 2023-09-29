import Button, { renderIcon } from "./Button";

const PillFIlledButtons = () => {
  return (
    <div className=" w-[30%] items-baseline gap-3 p-3 flex flex-col items-center">
      <div>
        <Button rounded>
          {renderIcon('plane')}
          Plain
        </Button>
      </div>
      <div>
        <Button success rounded>
          {renderIcon('bell')}
          Click here!!!
        </Button>
      </div>
      <div>
        <Button danger rounded>
          {renderIcon('down')}
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning rounded>
          {renderIcon('eye')}
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          {renderIcon('palm')}
          Hide Ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          {renderIcon('box')}
          Something!
        </Button>
      </div>
    </div>
  )
}

export default PillFIlledButtons;